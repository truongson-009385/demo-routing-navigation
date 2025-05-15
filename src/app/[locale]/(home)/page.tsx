import {getTranslations} from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations('HomePage');

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">
        {t('title')}
      </h1>
      <p className='text-center'>
        {t('text')}
      </p>
    </div>
  );
}
