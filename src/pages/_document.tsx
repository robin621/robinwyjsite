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
          <meta content="notranslate" name="google" />
        </Head>
        <body className="bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
