import { logo } from '../assets';

const Hero = () => {
  return (
    <header className = "w-full flex justify-center items-center flex-col">
        <nav className = "flex justify-between items-center w-full mb-10 pt-3">
            <img src = { logo } alt = "sumz_logo" className = "w-48 object-contain"/>

            <button type = "button" onClick = {() => window.open("https://github.com/piyushh-11/ai_summarizer")} className = "black_btn">
                GitHub
            </button>
        </nav>

        <h1 className = "head_text">
            Summarize Any Article With <br className = "max-md:hidden"/>
            <span className = "green_gradient">OpenAI GPT-4</span>
        </h1>
        <h2 className = "desc">
            Simplify reading with SummaryMe, an open source tool that transforms long articles into consise summaries
        </h2>
    </header>
  )
}

export default Hero