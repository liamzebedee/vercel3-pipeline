import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { getChainName } from '@/lib'

const inter = Inter({ subsets: ['latin'] })

// const manifest = require('../public/manifest.json')
import {manifests} from '../data/manifests'
console.log(manifests)

export default function Home() {
  return (
    <>
      <Head>
        <title>Deployments</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Deployments</h1>

        <table>
          <thead>
            <tr>
              <th>Manifest</th>
              <th>Network</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(manifests).map(([filename, manifest]: any) => {
              const deployment = manifest.deployments[0]
              const networkName = getChainName(deployment.chainId)

              return (
                <tr>
                  <td>{filename}</td>
                  <td>{networkName}</td>
                  <td>
                    <Link href={`/deployments/${filename}/`}>
                      View Contracts
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </main>
    </>
  )
}

