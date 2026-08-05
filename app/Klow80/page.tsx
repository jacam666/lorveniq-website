'use client';

import Image from 'next/image';
import Link from 'next/link';
import CartNavLink from '../components/CartNavLink';

export default function Klow80Page() {
	const highlights = [
		{
			title: 'High-Load Compound Profile',
			description: 'Configured for advanced protocols evaluating higher-dose peptide handling in controlled studies.',
		},
		{
			title: 'Batch Consistency Standards',
			description: 'Quality-focused preparation designed to support reproducible data across repeat experiments.',
		},
		{
			title: 'Lab-Only Distribution',
			description: 'Positioned strictly for scientific institutions and qualified professionals performing research.',
		},
	];

	return (
		<div className="min-h-screen bg-gray-50">
			<header className="sticky top-0 z-20 border-b border-slate-800/80 bg-black backdrop-blur">
				<div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
				<div className="mx-auto flex max-w-7xl items-center justify-between px-6">
					<Link href="/" className="flex items-center gap-3">
						<Image
							src="/images/LORVENIQ-logo-black.png"
							alt="LORVENIQ logo"
							width={180}
							height={36}
							priority
							className="h-auto w-[180px] sm:w-[210px]"
						/>
					</Link>

					<nav className="flex items-center gap-5 text-sm font-medium text-slate-300">
						<CartNavLink className="inline-flex items-center transition hover:text-cyan-400" />
						<Link href="/Products" className="transition hover:text-cyan-400">
							Products
						</Link>
						<a href="#contact" className="transition hover:text-cyan-400">
							Contact
						</a>
					</nav>
				</div>
			</header>

			<section className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
				<div className="relative mb-10 overflow-hidden rounded-3xl border border-cyan-100 bg-gradient-to-r from-cyan-50 via-white to-slate-100 p-8 shadow-sm sm:p-10">
					<div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-200/40 blur-2xl" />
					<div className="absolute -bottom-14 left-1/3 h-44 w-44 rounded-full bg-slate-200/40 blur-2xl" />

					<div className="relative z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
						<div>
							<p className="mb-3 inline-flex rounded-full border border-cyan-200 bg-cyan-100/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800">
								Research Profile
							</p>
							<h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
								KLOW 80MG
							</h1>
							<p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
								A high-strength peptide option designed for researchers running demanding and precision-focused protocols.
							</p>
						</div>

						<div className="group relative h-72 overflow-hidden rounded-2xl border border-cyan-100/90 bg-gradient-to-b from-cyan-50 via-white to-slate-100 sm:h-80">
							<Image
								src="/images/KLOW_80mg-removebg-preview.png"
								alt="KLOW 80MG"
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
								className="object-contain p-8 transition-transform duration-300 group-hover:scale-105"
								priority
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-6 pb-16">
				<div className="mb-8 text-center">
					<p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800">Research Highlights</p>
					<h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Why Researchers Choose KLOW</h2>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
					{highlights.map((item) => (
						<div
							key={item.title}
							className="group overflow-hidden rounded-2xl border border-cyan-100/90 bg-white/90 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-200/40"
						>
							<p className="mb-3 inline-flex rounded-full border border-cyan-200 bg-cyan-100/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-800">
								Research Grade
							</p>
							<h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
							<p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
							<div className="mt-5 h-px w-full bg-gradient-to-r from-cyan-200/60 to-transparent" />
							<p className="mt-3 text-xs font-medium text-cyan-700">For laboratory research use only.</p>
						</div>
					))}
				</div>

				<div className="mt-10 rounded-2xl border border-cyan-100 bg-gradient-to-r from-white via-cyan-50/50 to-slate-100 p-6 text-center sm:p-8">
					<p className="text-sm leading-relaxed text-slate-700 sm:text-base">
						This compound is provided exclusively for scientific and laboratory investigation by qualified professionals.
					</p>
					<p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-800">
						Not for human or animal consumption.
					</p>
				</div>
			</section>
		</div>
	);
}
