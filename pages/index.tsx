import Head from "next/head"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Animation from "../components/Animation";
import { setName } from "../store/nameSlice";

import hero from "../styles/Hero.module.css";
import form from "../styles/Form.module.css";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [brandCharacteristics, setBrandCharacteristics] = useState("");
  const [space, setSpace] = useState("");
  const [displayedName, setDisplayedName] = useState("");
  const [displayedExplanation, setDisplayedExplanation] = useState("");
  const [completion, setCompletion] = useState(0);
  const dispatch = useDispatch();

  const prompt = `
    A design system is a collection of reusable design components, guidelines, and standards that are used to create consistent and cohesive user interfaces across different products or platforms. It helps designers and developers work more efficiently and ensures a consistent brand identity and user experience.

    Suggest me a name for the design system of ${companyName}.

    The name should :
    - be one word only and different that the brand name itself;
    - fits in the ${space} industry, reflects the following brand characteristics: ${brandCharacteristics}.
    - not contains quotes or the terms "x", "design system" or "design" in it.
    - should contains only letters, no hyphens, no dots, no brackets, no special characters.

    Here are some examples of some well-know design systems: Material (Google), Fluent (Microsoft), Carbon (IBM), Polaris (Shopify), and Spectrum (Adobe).

    Then, write an explanation for this generated name shorter than 280 characters. It should explain why this name is a good fit for the design system of ${companyName}.
    Add a "%" prefix to your explanation.

    Your whole answer should have the following format: [NAME]%[EXPLANATION]
  `;

  const generateName = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    const resultChunked = [];

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      resultChunked.push(chunkValue)

      if (completion < 1) {
        setCompletion(resultChunked.length / 50);
      } else {
        setCompletion(1);
      }
    }

    const [displayedName, displayedExplanation] = resultChunked.join("").split("%");

    if (done) {
      setDisplayedName(displayedName);
      setDisplayedExplanation(displayedExplanation);
      dispatch(setName(displayedName));
    }

    setLoading(false);
  };

  return (
    <>
      <div className="container">
        <Header />
        <Layout>
          <main className={loading ? "loading" : ""}>
            <div className={hero.hero}>
              <p className="heading-1 text-high-emphasis">Empower your design system<span className={hero.icon + " " + hero.designSystem}><Animation path="design-system.json" className={hero.animation} /></span>with a memorable name<span className={hero.icon + " " + hero.name}><Animation path="name.json" className={hero.animation} /></span>that conveys emotions<span className={hero.icon + " " + hero.emotions}><Animation path="emotions.json" className={hero.animation} /></span>, and extends your brand characteristics<span className={hero.icon + " " + hero.brandCharacteristics}><Animation path="brand-characteristics.json" className={hero.animation} /></span>.</p>
              <p className="body-1-s text-low-emphasis">Your design system is the backbone of your brand&apos;s visual identity, and a great name can take it to the next level. With the power of GPT-3, we&apos;ll help you generate a name that captures your brand&apos;s unique characteristics, industry, and personality.</p>
            </div>

            <motion.div
              className={form.container}
              initial={{ y: 48, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.4, delay: 0.2 }}
            >
              <form className={form.form} onSubmit={generateName} autoComplete="off">
                <div className={form.group}>
                  <label htmlFor="companyName" className="body-2-l text-high-emphasis">Company name</label>
                  <input type="text" id="companyName" name="companyName" className="body-2-m text-medium-emphasis" placeholder="NASA" onChange={(event) => setCompanyName(event.target.value)} />
                </div>
                <div className={form.group}>
                  <label htmlFor="brandCharacteristics" className="body-2-l text-high-emphasis">Brand characteristics</label>
                  <input type="select" id="brandCharacteristics" name="brandCharacteristics" className="body-2-m text-medium-emphasis" placeholder="Creative" onChange={(event) => setBrandCharacteristics(event.target.value)} />
                </div>
                <div className={form.group}>
                  <label htmlFor="space" className="body-2-l text-high-emphasis">Space</label>
                  <select name="space" id="space" className="body-2-m text-medium-emphasis" onChange={(event) => setSpace(event.target.value)}>
                    <option value="automotive">Automotive</option>
                    <option value="banking">Banking</option>
                    <option value="construction">Construction</option>
                    <option value="education">Education</option>
                    <option value="energy">Energy</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="finance">Finance</option>
                    <option value="food">Food</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="insurance">Insurance</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="media">Media</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="retail">Retail</option>
                    <option value="sport">Sport</option>
                    <option value="technology">Technology</option>
                    <option value="telecommunications">Telecommunications</option>
                    <option value="transportation">Transportation</option>
                    <option value="travel">Travel</option>
                    <option value="utilities">Utilities</option>
                  </select>
                </div>
                <button className="button button-large button-primary" type="submit" disabled={loading}>Generate a name
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.11284 5.64927C6.84903 5.85991 5.85868 6.85025 5.64805 8.11406C5.62021 8.2811 5.38012 8.2811 5.35228 8.11406C5.14164 6.85025 4.15129 5.85991 2.88749 5.64927C2.72045 5.62143 2.72045 5.38134 2.88749 5.3535C4.15129 5.14286 5.14164 4.15251 5.35228 2.88871C5.38012 2.72167 5.62021 2.72167 5.64805 2.88871C5.85868 4.15251 6.84903 5.14286 8.11284 5.3535C8.27988 5.38134 8.27988 5.62143 8.11284 5.64927Z" />
                    <path d="M4.71974 10.5198L7.08349 9.85799C8.42882 9.48129 9.48013 8.42998 9.85683 7.08465L10.5187 4.7209C10.655 4.23399 11.3453 4.23398 11.4816 4.7209L12.1435 7.08465C12.5202 8.42998 13.5715 9.48129 14.9168 9.85799L17.2806 10.5198C17.7675 10.6562 17.7675 11.3465 17.2806 11.4828L14.9168 12.1447C13.5715 12.5213 12.5202 13.5727 12.1435 14.918L11.4816 17.2817C11.3453 17.7687 10.655 17.7687 10.5187 17.2817L9.85683 14.918C9.48013 13.5727 8.42882 12.5213 7.08349 12.1447L4.71974 11.4828C4.23283 11.3465 4.23282 10.6562 4.71974 10.5198Z" />
                  </svg>
                </button>
              </form>
              <div className={form.result}>
                {displayedName && !loading
                  ? <p className="display-1 text-high-emphasis text-result">{displayedName}<br />Design System</p>
                  : <p className="display-1 text-low-emphasis text-disabled">Your design system name</p>
                }

                {displayedExplanation && !loading
                  ? <p className="body-emphasis text-low-emphasis">{displayedExplanation}</p>
                  : <p className="body-emphasis text-low-emphasis">You&apos;ll find the perfect description for your design system</p>
                }
              </div>
            </motion.div>
          </main>
        </Layout>
        <Footer />
      </div>
    </>
  )
}
