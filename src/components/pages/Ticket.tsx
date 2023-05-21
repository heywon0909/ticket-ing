const Ticket = () => {
    return (
        <section className="flex items-center justify-center">
            <div className='md:w-3/6 w-full relative top-10 h-full'>
                 <h2 className='p-2 text-xl font-extrabold border-b-2 mb-2 border-neutral-950'>루엘 내한공연</h2>
                <div className='flex lg:flex-nowrap flex-wrap justify-center mt-5'>
                    <div className="h-full xl:w-2/5 lg:w-4/5 md:w-2/3">
                    <img
                        src="https://cdn.straightnews.co.kr/news/photo/202303/227894_129155_3657.jpeg"
                        className="h-96 w-full"
                    />
                    </div>
                    <div className='flex w-full justify-center md:p-0 pt-2 h-full'>
                        <ul className='flex flex-col space-y-5'>
                            <li>장소 : 샤롯데씨어터</li>
                            <li>공연기간 : 2023.07.21 ~2023.11.17</li>
                            <li>공연시간 : 150분(인터미션 20분 포함)</li>
                            <li>관람연령 : 만 7세이상</li>
                            <li>장소</li>
                        </ul>
                    </div>
                </div>
                <div className='relative top-10'>
                 <h2 className='text-xl mb-2 font-semibold'>지난 티켓 공연 후기 🎫</h2>
                <div className='w-full h-auto border-2 p-2 flex'>
                    <div className='w-full'>
                        <div className='flex h-16'>
                            <div className='w-12 h-12 bg-stone-700 rounded-full grow-0'></div>
                                <div className='pl-2 h-10 flex items-center'>
                                    <p className='font-semibold'>child</p>
                                </div>
                        </div>    
                        <div className='pl-2 pt-2 flex flex-col'>
                             <div className=''>
                        230516 Ruel 내한 콘서트
연출,음색 얼굴,제스처 모든 게 완벽했던 공연
(인생 첫 내한 공연이 4년 전 나를 해연의 길로 발 들이게 해준 가수의 공연이라 의미적이다)
                            </div>
                            <div>
                                <img src="../../public/image/test.jpg" />
                            </div>
                        </div>
                    </div>
                   
                </div>
                  <div className='w-full h-auto border-2 p-2 flex'>
                    <div className='w-full'>
                        <div className='flex h-16'>
                            <div className='w-12 h-12 bg-stone-700 rounded-full grow-0'></div>
                                <div className='pl-2 h-10 flex items-center'>
                                    <p className='font-semibold'>child</p>
                                </div>
                        </div>    
                        <div className='pl-2 pt-2 flex flex-col'>
                             <div className=''>
                        230516 Ruel 내한 콘서트
연출,음색 얼굴,제스처 모든 게 완벽했던 공연
(인생 첫 내한 공연이 4년 전 나를 해연의 길로 발 들이게 해준 가수의 공연이라 의미적이다)
                            </div>
                            <div>
                                <img src="../../public/image/test.jpg" />
                            </div>
                        </div>
                    </div>
                   
                    </div>
                      <div className='w-full h-auto border-2 p-2 flex'>
                    <div className='w-full'>
                        <div className='flex h-16'>
                            <div className='w-12 h-12 bg-stone-700 rounded-full grow-0'></div>
                                <div className='pl-2 h-10 flex items-center'>
                                    <p className='font-semibold'>child</p>
                                </div>
                        </div>    
                        <div className='pl-2 pt-2 flex flex-col'>
                             <div className=''>
                        230516 Ruel 내한 콘서트
연출,음색 얼굴,제스처 모든 게 완벽했던 공연
(인생 첫 내한 공연이 4년 전 나를 해연의 길로 발 들이게 해준 가수의 공연이라 의미적이다)
                            </div>
                            <div>
                                <img src="../../public/image/test.jpg" />
                            </div>
                        </div>
                    </div>
                   
                </div>
                </div>
            </div>
             
        </section>
        )


}

export default Ticket;