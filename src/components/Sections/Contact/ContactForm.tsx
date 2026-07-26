import {FC, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC<{locale?: 'en' | 'zh'}> = memo(({locale = 'en'}) => {
  const isZh = locale === 'zh';
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      /**
       * This is a good starting point to wire up your form submission logic
       * */
      console.log('Data to send: ', data);
    },
    [data],
  );

  const inputClasses =
    'rounded-md border border-neutral-700 bg-neutral-900 text-sm text-white placeholder:text-sm placeholder:text-neutral-500 focus:border-white focus:outline-none focus:ring-1 focus:ring-white';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input
        className={inputClasses}
        name="name"
        onChange={onChange}
        placeholder={isZh ? '姓名' : 'Name'}
        required
        type="text"
      />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder={isZh ? '电子邮箱' : 'Email'}
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder={isZh ? '留言' : 'Message'}
        required
        rows={6}
      />
      <button
        aria-label={isZh ? '提交联系表单' : 'Submit contact form'}
        className="w-max rounded-md border border-white bg-white px-5 py-2.5 text-sm font-medium text-neutral-950 outline-none hover:bg-neutral-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-950"
        type="submit">
        {isZh ? '发送留言' : 'Send Message'}
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
