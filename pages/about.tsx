import Link from "next/link";
import { motion } from "framer-motion";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Maker from "../components/Maker";

import about from "../styles/About.module.css";

export default function About() {
  return (
    <>
      <div className="container">
        <Header />
        <Layout>
          <main>
            <div className={about.hero}>
              <h1 className="heading-1 text-high-emphasis">
                Built by Specify
                <span className={about.icon + " " + about.specify}></span>
                <br />
                Powered by OpenAI GPT-3
                <span className={about.icon + " " + about.openai}></span>and
                Vercel Edge Functions
                <span className={about.icon + " " + about.vercel}></span>.
              </h1>
            </div>
            <motion.div
              className={about.content}
              initial={{ y: 48, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.4, delay: 0.2 }}
            >
              <div className={about.story}>
                <div className={about.storyPart}>
                  <h2 className="body-2-m text-low-emphasis">
                    Initial inspiration
                  </h2>
                  <p className="body-1-s text-medium-emphasis">
                    At our 2023 Winter Retreat in January, we discussed how AGI
                    can assist teams using design systems during our hackathon
                    day. A lot of topics were mentioned, and we thought about{" "}
                    <Link
                      className="text-info"
                      href="https://designtitles.com/"
                      target="_blank"
                    >
                      Design Titles ↗︎
                    </Link>
                    , a playful website created by Xtian Miller and Boris
                    Crowther where you can generate job names for designers.
                  </p>
                  <p className="body-1-s text-medium-emphasis">
                    We loved this idea of generating names, and we know from
                    experience naming stuff, whether we talk about tokens,
                    components, or even worse — your layers, can sometimes be
                    tricky. So we chose to build a tool that provides ideas for
                    teams looking for a name for their design systems.
                  </p>
                </div>
                <div className={about.storyPart}>
                  <h2 className="body-2-m text-low-emphasis">
                    Proof of Concept
                  </h2>
                  <p className="body-1-s text-medium-emphasis">
                    Very often, design systems tend to be named{" "}
                    <code>&#123;companyName&#125; UI</code>, <code>&#123;companyName&#125; Design System</code>, <code>&#123;companyName&#125; DLS</code>. While this is
                    totally fine, we were wondering if GPT-3 could generate
                    appropriate names based on the company name, its brand
                    characteristics and its space. In addition, we wanted a name
                    that could make sense for every company and its design
                    system.
                  </p>
                  <p className="body-1-s text-medium-emphasis">
                    After playing a bit with ChatGPT to see if that could be
                    interesting, we created a proof of concept resulting in a
                    simple Next JS app with three input fields, a button, and a
                    result displayed in a way too big font size, set in Inter
                    (of course).
                  </p>
                </div>
                <div className={about.storyPart}>
                  <h2 className="body-2-m text-low-emphasis">Final product</h2>
                  <p className="body-1-s text-medium-emphasis">
                    During our cooldown week of April, Yann-Edern took the
                    initiative to transform this POC into something that can be
                    shared on the Internets. He also made it more on-brand,
                    improved the prompt sent to GPT-3, and leveraged Vercel Edge
                    Functions, thanks to{" "}
                    <Link
                      className="text-info"
                      href="https://vercel.com/blog/gpt-3-app-next-js-vercel-edge-functions"
                      target="_blank"
                    >
                      this brilliant article ↗︎
                    </Link>{" "}
                    from Hassan El Mghari.
                  </p>
                </div>
              </div>
              <motion.div
                className={about.informations}
                initial={{ y: 48, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.4, delay: 0.4 }}
              >
                <div className={about.information}>
                  <p className="body-2-m text-low-emphasis">Makers</p>
                  <div className={about.makers}>
                    <Maker
                      name="Yann-Edern Gillet"
                      role="Product Designer"
                      link="https://twitter.com/yannglt"
                      path="yann.jpg"
                    />
                    <Maker
                      name="Mohamed Khalil Elloumi"
                      role="Back-End Engineer"
                      link="https://twitter.com/MKelloumi"
                      path="khalil.jpg"
                    />
                    <Maker
                      name="Maud Miguet"
                      role="Product Manager"
                      link="https://twitter.com/maudmiguet"
                      path="maud.jpg"
                    />
                    <Maker
                      name="Alexis Bonnefon"
                      role="People Manager"
                      link="https://www.linkedin.com/in/alexisbonnefon/"
                      path="alexis.jpg"
                    />
                  </div>
                </div>
                <div className={about.information}>
                  <div className={about.stackTitle}>
                    <p className="body-2-m text-low-emphasis">Stack</p>
                    <Link
                      className="body-2-s text-info"
                      href="https://github.com/yannglt/not-boring-ds-names"
                      target="_blank"
                    >
                      View code ↗︎
                    </Link>
                  </div>
                  <div className={about.stackList}>
                    <div className={about.stackItem}>
                      <p className="body-2-s text-medium-emphasis">Framework</p>
                      <p className="body-2-l text-high-emphasis">Next JS</p>
                    </div>
                    <div className={about.stackItem}>
                      <p className="body-2-s text-medium-emphasis">
                        Animations
                      </p>
                      <p className="body-2-l text-high-emphasis">
                        Framer Motion + Lottie
                      </p>
                    </div>
                    <div className={about.stackItem}>
                      <p className="body-2-s text-medium-emphasis">AGI Model</p>
                      <p className="body-2-l text-high-emphasis">
                        OpenAI GPT-3.5 Turbo
                      </p>
                    </div>
                    <div className={about.stackItem}>
                      <p className="body-2-s text-medium-emphasis">
                        Deployment
                      </p>
                      <p className="body-2-l text-high-emphasis">Vercel</p>
                    </div>
                  </div>
                </div>
                <div className={about.information}>
                  <p className="body-2-m text-low-emphasis">About Specify</p>
                  <div className={about.logo}></div>
                  <p className="body-2-s text-medium-emphasis">
                    Specify automate the distribution of your design tokens and
                    enhance your design system by creating your own source of
                    truth, improve collaboration between design and development
                    and reduce manual work.
                  </p>
                  <Link
                    className="button button-medium button-secondary"
                    href="https://specifyapp.com"
                    target="_blank"
                  >
                    Learn more
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.3 3.75146C11.3 4.16568 11.6358 4.50146 12.05 4.50146H14.4393L8.46967 10.4711C8.17678 10.764 8.17678 11.2389 8.46967 11.5318C8.76256 11.8247 9.23744 11.8247 9.53033 11.5318L15.5 5.56213V7.95146C15.5 8.36568 15.8358 8.70146 16.25 8.70146C16.6642 8.70146 17 8.36568 17 7.95146V3.75146C17 3.33725 16.6642 3.00146 16.25 3.00146H12.05C11.6358 3.00146 11.3 3.33725 11.3 3.75146Z" />
                      <path d="M5.75 5.25146C4.23122 5.25146 3 6.48268 3 8.00146V14.2515C3 15.7702 4.23122 17.0015 5.75 17.0015H12.25C13.7688 17.0015 15 15.7702 15 14.2515V11.0015C15 10.5873 14.6642 10.2515 14.25 10.2515C13.8358 10.2515 13.5 10.5873 13.5 11.0015V14.2515C13.5 14.9418 12.9404 15.5015 12.25 15.5015H5.75C5.05964 15.5015 4.5 14.9418 4.5 14.2515V8.00146C4.5 7.31111 5.05964 6.75146 5.75 6.75146H9C9.41421 6.75146 9.75 6.41568 9.75 6.00146C9.75 5.58725 9.41421 5.25146 9 5.25146H5.75Z" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </main>
        </Layout>
        <Footer />
      </div>
    </>
  );
}