import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';

export function Footer() {
    return (
        <footer className="w-[95%] sm:max-w-7xl bg-[rgba(18,18,18,0.38)] text-white fixed bottom-0 left-0 right-0 h-16 z-10 backdrop-blur-2xl flex justify-between items-center text-sm sm:text-base mx-auto">
            <span>ShortLink - desarrollado por Enzo Pennisi</span>
            <div className="flex gap-4">
                <a href="https://github.com/EnzoPennisi" target='_blank' rel='noreferrer'>
                    <img
                        src={githubIcon}
                        className='size-8 sm:size-10 bg-auto rounded-full'
                        style={{ transition: 'box-shadow 0.3s ease-in-out' }}
                        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 255, 255, 1)'}
                        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.5)'}
                    />
                </a>
                <a href="https://www.linkedin.com/in/enzo-pennisi-670a882b3/" target='_blank' rel='noreferrer'>
                    <img
                        src={linkedinIcon}
                        className='size-8 sm:size-10 bg-auto rounded-xl'
                        style={{ transition: 'box-shadow 0.3s ease-in-out' }}
                        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 119, 181, 1)'}
                        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 119, 181, 0.5)'}
                    />
                </a>
            </div>
        </footer>
    )
}
