import Document, {DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript} from 'next/document';

interface DocumentProps extends DocumentInitialProps {
  lang: string;
}

export default class SiteDocument extends Document<DocumentProps> {
  static async getInitialProps(context: DocumentContext): Promise<DocumentProps> {
    const initialProps = await Document.getInitialProps(context);

    return {
      ...initialProps,
      lang: context.pathname.startsWith('/zh') ? 'zh-CN' : 'en',
    };
  }

  render() {
    return (
      <Html lang={this.props.lang}>
        <Head>
          <meta charSet="utf-8" />
        </Head>
        <body className="bg-black">
          <Main />
          <NextScript />
          <script
            async
            data-cf-beacon='{"token":"c7a6c29d54a14b54a71b0a8a690518e4"}'
            src="https://static.cloudflareinsights.com/beacon.min.js"
            type="module"
          />
        </body>
      </Html>
    );
  }
}
