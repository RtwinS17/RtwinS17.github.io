import './Loading.style.css';


export const Loading = () => {
    return (
        <>

                <div className="flex flex-col items-center text-center pb-4 text-xl overflow-hidden loadingContainer">
                    <article className="flex flex-col gap-8 w-full p-12 mb-8">
                        <span> Le festival est en cours de préparation</span>
                        <span> Veuillez patienter</span>
                    </article>

                    <div className="loader">
                    </div>
                </div>

        </>
    )
}