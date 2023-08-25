
// import components
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <main>
            <div className='flex flex-col justify-between'>
                <Navbar />

                <div className='h-[calc(100vh-var(--nav-height))] flex gap-[5rem] px-[10rem]'>
                    <div className='flex flex-col flex-1 justify-center'>
                        <p className='text-[5rem] leading-none' style={{ background: 'linear-gradient(to right, var(--primary-blue), var(--primary-green))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Bring your <br /> conversations to life with Swift
                        </p>
                        <p className='my-[3rem] text-[2rem]'>A simple app that lets you text, video call, and stay close to people you care about. </p>
                        <Button className='w-[20rem] px-[1.75rem] py-[2.5rem] text-[1.5rem] text-black hover:bg-[var(--primary-blue)] rounded-[5rem] bg-[var(--primary-green)]'>Download For Mobile</Button>
                    </div>
                </div>

                <section className="h-[80vh] px-[10rem] bg-blue-300">
                </section>

                <Footer />
            </div>
        </main>
    )
}
