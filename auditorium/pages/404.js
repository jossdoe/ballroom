import Layout from 'layout/Layout';
import ErrorSVG from 'assets/icons/404.svg';
import Link from 'next/link';

const Error404 = () => {
  return (
    <Layout title="page not found">
      <div
        style={{
          height: '40vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <div style={{ color: '#DA4167' }}>
          <ErrorSVG height="150" />
        </div>
        <div style={{ textAlign: 'center', lineHeight: 1.5 }}>
          <h1>There's no one to dance with</h1>
          <p>
            We couldn't find the page you're looking for. Woopsie! <br />
            <Link href="/">
              <a
                style={{
                  textDecoration: 'none',
                  fontWeight: 700,
                  color: '#00CC99',
                }}
              >
                Get back to the party
              </a>
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Error404;
