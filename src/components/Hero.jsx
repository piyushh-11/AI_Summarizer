import { logo } from '../assets';

const Hero = () => {
  return (
    <header className = "w-full flex justify-center items-center flex-col">
        <nav className = "flex justify-between items-center w-full mb-10 pt-3">
            <img src = { logo } alt = "sumz_logo" className = "w-28 object-contain"/>

            <button type = "button" onClick = {() => window.open("https://github.com/piyushh-11/ai_summarizer")} className = "black_btn">
                Github
            </button>
        </nav>

        <h1 className = "head_text">
            Summarize Any Article With <b className = "max-md:hidden"/>
            <span className = "orange_gradient">OpenAI GPT-4</span>
        </h1>
        <h2 className = "desc">
            Simplify you reading with Sumz, an open source article summarizing tool that transforms long articles into consise summaries
        </h2>
    </header>
  )
}

export default Hero