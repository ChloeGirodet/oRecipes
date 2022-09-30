import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';
import Page from 'src/components/Page';

const Error = () => (
  <Page>
    <AppHeader />
    <Content
      title="Erreur"
      text="Nous sommes désolé, Une erreur s'est produite."
    />
  </Page>
);

export default Error;
