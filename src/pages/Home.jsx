
import React, { useState, useEffect } from 'react';

import heroImg from './img/team.jpg';
import showCase from './img/tyler-shot.jpg';
import Farracrest from './img/farringdon_crest.png';
import WRyouth from './img/wryouth.jpg';

import TeamFormation from './components/TeamFormation.jsx';
import Sponsor from './components/sponsor.jsx';
import SignupSponsor from './components/signup-sponsor.jsx';
import TeamIntro from './components/TeamIntro.jsx'
import HeadLineGrid from './components/HeadLineGrid.jsx'

//const heroImg = '/img/team.jpg';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[80vh]">
                {/* Background Image */}
                <div className="absolute inset-0 -z-10">
                    <img
                        src={heroImg}
                        alt="team hero"
                        className="w-full h-full object-cover brightness-75"
                        onError={(e) => { e.target.src = '/fallback.jpg'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60" />
                </div>

                {/* Content Positioned at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-8 flex flex-col md:flex-row items-end justify-between gap-8 text-white">
                    <div className="max-w-2xl">
                        <p className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-sm text-white/80">
                            Grassroots Football • Sunderland
                        </p>
                        <h1 className="mt-4 text-5xl font-extrabold">
                            Farringdon <span className="text-red-500">U12s</span>
                        </h1>
                        <p className="mt-4 text-white/70">
                            Community-driven youth football. Competing with passion, playing with respect.
                        </p>
                        <div className="mt-6 flex gap-3">
                            <a
                                href="/fixtures"
                                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-semibold"
                            >
                                View Fixtures
                            </a>
                            <a
                                href="#gallery"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3"
                            >
                                Gallery
                            </a>
                        </div>
                    </div>

                    {/* Clickable Showcase Image */}
                    <div
                        className="hidden md:block absolute right-4 bottom-8 w-96 rounded-3xl overflow-hidden border border-white/10 cursor-pointer group"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <img
                            src={showCase}
                            alt="players"
                            className="w-full h-full object-cover transition duration-300 group-hover:brightness-75"
                        />
                        <div className="absolute inset-0 bg-red-700/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-center px-4">
                            <p className="text-white text-sm font-medium">Tyler Grabs the winner for Farra!</p>
                        </div>
                    </div>
                </div>
            </section>

        


            {/* Modal Viewer */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
                    onClick={() => setIsModalOpen(false)}
                >
                    <img
                        src={showCase}
                        alt="Tyler Grabs the winner for Farra!"
                        className="max-w-full max-h-full rounded-xl shadow-2xl"
                    />
                    <button
                        className="absolute top-6 right-6 text-white text-3xl font-bold"
                        onClick={() => setIsModalOpen(false)}
                    >
                        &times;
                    </button>
                </div>
            )}

          {/* Formation Section */}
          <div className="mt-8">
              <TeamIntro />
          </div>

          {/* Formation Section */}
          <div className="mt-8">
              <TeamFormation />
          </div>

          <div className="mt-8">
              <HeadLineGrid />
          </div>

          <div className="mt-8">
              <Sponsor />
          </div>

          <div className="mt-8">
              <SignupSponsor />
          </div>

          


          <section id="fixtures" className="mx-auto max-w-6xl px-4 py-12">
              <h2 className="text-2xl font-bold mb-4">Fixtures</h2>

              <div className="grid gap-6 md:grid-cols-4">
                  {/* Fixture Card */}
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-md">
                      <p className="text-white/70 text-center">September 13th</p>
                      <br></br>
                      <div className="flex items-center justify-between">
                          <img src={Farracrest} alt="Farringdon Crest" className="h-10 w-10 object-contain" />
                          <span className="text-white/60 font-bold text-lg">vs</span>
                          <img src={WRyouth} alt="WRyouth Crest" className="h-10 w-10 object-contain" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-center">Farringdon Detached vs West Rainton Youth</h3>
                      <p className="text-white/70 text-center">The Crescent, DH4 6SB</p>
                      <div className="flex justify-between items-center mt-2 text-sm text-white/60">
                          <span>Kick-off</span>
                          <span>09:30</span>
                      </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-md">
                      <div className="flex items-center justify-between">
                          <img src="/logos/aston-villa.png" alt="Aston Villa" className="h-10 w-10 object-contain" />
                          <span className="text-white/60 font-bold text-lg">vs</span>
                          <img src="/logos/burnley.png" alt="Burnley" className="h-10 w-10 object-contain" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-center">Aston Villa vs Burnley</h3>
                      <p className="text-white/70 text-center">Stamford Bridge</p>
                      <div className="flex justify-between items-center mt-2 text-sm text-white/60">
                          <span>Kick-off</span>
                          <span>15:00</span>
                      </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-md">
                      <div className="flex items-center justify-between">
                          <img src="/logos/nottingham-forest.png" alt="Nottingham Forest" className="h-10 w-10 object-contain" />
                          <span className="text-white/60 font-bold text-lg">vs</span>
                          <img src="/logos/sheffield-united.png" alt="Sheffield United" className="h-10 w-10 object-contain" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-center">Nottingham Forest vs Sheffield United</h3>
                      <p className="text-white/70 text-center">The City Ground</p>
                      <div className="flex justify-between items-center mt-2 text-sm text-white/60">
                          <span>Kick-off</span>
                          <span>17:30</span>
                      </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-md">
                      <div className="flex items-center justify-between">
                          <img src="/logos/manchester-united.png" alt="Manchester United" className="h-10 w-10 object-contain" />
                          <span className="text-white/60 font-bold text-lg">vs</span>
                          <img src="/logos/brighton.png" alt="Brighton" className="h-10 w-10 object-contain" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-center">Manchester United vs Brighton</h3>
                      <p className="text-white/70 text-center">Old Trafford</p>
                      <div className="flex justify-between items-center mt-2 text-sm text-white/60">
                          <span>Kick-off</span>
                          <span>20:00</span>
                      </div>
                  </div>
              </div>
          </section>


   <section id="sponsors" className="mx-auto max-w-6xl px-4 py-12">
  <div className="flex items-center justify-between">
    <h3 className="text-xl font-bold">Proudly sponsored by</h3>
    <a href="/contact" className="text-white/70">Become a sponsor →</a>
  </div>

  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
    {/* Sponsor Card */}
    <a
      href="https://swimcity.co.uk"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:shadow-lg transition"
    >
      <img
        src="/img/sponsors/swimcity-logo.png"
        alt="SwimCity"
        className="w-full h-24 object-contain p-4"
      />
      <div className="absolute inset-0 bg-red-700/80 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-center px-4">
        <p className="text-white text-sm font-medium">Premium swimwear and accessories for all ages.</p>
      </div>
    </a>

    {/* Repeat for other sponsors */}
    <a
      href="https://twkitchens.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:shadow-lg transition"
    >
      <img
        src="/img/sponsors/tw-kitchens-logo.png"
        alt="TW Kitchens"
        className="w-full h-24 object-contain p-4"
      />
      <div className="absolute inset-0 bg-red-700/80 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-center px-4">
        <p className="text-white text-sm font-medium">Custom kitchen design and installation across the North East.</p>
      </div>
    </a>

    <a
      href="https://base44.io"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:shadow-lg transition"
    >
      <img
        src="/img/sponsors/base44-logo.png"
        alt="Base44"
        className="w-full h-24 object-contain p-4"
      />
      <div className="absolute inset-0 bg-red-700/80 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-center px-4">
        <p className="text-white text-sm font-medium">Digital solutions for grassroots clubs and community groups.</p>
      </div>
    </a>

    <a
      href="#"
      className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:shadow-lg transition"
    >
      <img
        src="/img/sponsors/local-partner.png"
        alt="Local Partner"
        className="w-full h-24 object-contain p-4"
      />
      <div className="absolute inset-0 bg-red-700/80 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-center px-4">
        <p className="text-white text-sm font-medium">Supporting youth football in Sunderland and beyond.</p>
      </div>
    </a>
  </div>
</section>

      <section id="gallery" className="mx-auto max-w-6xl px-4 py-12">
        <h3 className="text-xl font-bold">Gallery</h3>
        <p className="text-white/70">Matchdays, training, and community.</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <img src="https://images.openai.com/thumbnails/url/1s8XEXicu1mSUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw6xDCvxiXIptUx2y6nKtzRJsagqLC6ySA9PDY-qCs4NDs-PcHePyHZJKzGLqHQ3qEoyTfEqL8zxTTdxCVQrBgAzMSqL" className="w-full h-48 object-cover rounded-2xl border border-white/10" alt="gallery1" />
          <img src="https://images.openai.com/thumbnails/url/XjeEt3icu1mSUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw4pDMvMTo_MLc7KTMvIN82o9M80cPHLy8tKtHAryvPUzfLyNU7094tKMi3wrchIS4qsSDSL8KxICrfMKFcrBgBNJisV" className="w-full h-48 object-cover rounded-2xl border border-white/10" alt="gallery2" />
          <img src="https://images.openai.com/thumbnails/url/Ua-2sHicu1mUUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw4uM9Itik91r0pNM_IxtSzyrnJL9M8wKQupSA4wznIqykgzy40Pzo4KDtI1DXQ19AtOLA_1DfDPiMhVKwYAxO8pEQ" className="w-full h-48 object-cover rounded-2xl border border-white/10" alt="gallery3" />
          <img src="https://images.openai.com/thumbnails/url/kKWzInicu1mUUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw4JKnPyLqwyi_RyM80ONgqIrMqtzAlNNjUNLYi3MI1KSk8pL64yTzVOdykNM4vKDsl3ToqKDPcISQ5XKwYAzmMpgg" className="w-full h-48 object-cover rounded-2xl border border-white/10" alt="gallery4" />
        </div>
      </section>

      <section id="join" className="bg-gradient-to-b from-red-700 to-red-600 py-16 mt-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-white">
          <h3 className="text-3xl font-extrabold">Join the Reds</h3>
          <p className="mt-2">We welcome new players, volunteers, and partners.</p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="/contact" className="rounded-xl bg-white px-6 py-3 font-semibold text-black">Get in touch</a>
            <a href="/fixtures" className="rounded-xl border border-white/30 px-6 py-3">See schedule</a>
          </div>
        </div>
      </section>
    </div>
  )
}
