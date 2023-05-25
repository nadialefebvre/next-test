import Link from "next/link"
import Head from "next/head"
import Layout from "../../components/layout"

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>This is a first post</title>
      </Head>
      <h1>First Post</h1>
    </Layout>
  )
}

export default FirstPost
