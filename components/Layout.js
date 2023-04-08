import Head from 'next/head';
import React from 'react'
import Header from '../components/Header';


const Layout = ({title,description,children}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="{description}" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:site_name" content="Portfolio" />
        <meta property="og:tittle" content={title} />
        <meta property="og:description" content={description} />

        <link rel="icon" href="/favicon.ico" />

        {/* buy me a coffee */}
        <script
          async
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="ozlemezgisari"
          data-description="Support me on Buy me a coffee!"
          data-message=""
          data-color="#BD5FFF"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        ></script>
        {/* buy me a coffee */}
      </Head>

      <div className="relative z-10 px-3 overflow-hidden min-h-screen bg-primary-light antialiased font-montserrat dark:bg-gray-900 dark:text-white">
        <div className="w-full h-full">
          <Header></Header>
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout