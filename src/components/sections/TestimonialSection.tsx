import Link from "next/link";
import { Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { SectionHeading } from "../SectionHeading";
import { testimonials } from "@/lib/content";
import { primaryPhone, waHref } from "@/lib/site";

const feedbackMessage =
  "Hello Building and Great Design, I would like to share feedback about my experience with your team.";

export function TestimonialSection() {
  const hasTestimonials = testimonials.length > 0;

  return (
    <section className="section bg-white" id="testimonials">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Client feedback"
            title="What our clients say"
            description={
              hasTestimonials
                ? "Real feedback shared by clients who agreed to have their words published."
                : "We would rather show you nothing than show you invented reviews. Genuine client feedback appears here as soon as it is shared with permission."
            }
          />
        </Reveal>

        {hasTestimonials ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 80}>
                <figure className="card flex h-full flex-col p-6">
                  <Icon name="quote" size={26} className="text-gold-400" />
                  <blockquote className="mt-4 flex-1 text-[13.5px] leading-relaxed text-navy-600">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-navy-100 pt-4">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-navy-800 font-display text-sm font-semibold text-gold-300">
                      {testimonial.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-[13px] font-semibold text-navy-800">
                        {testimonial.name}
                      </span>
                      {testimonial.location && (
                        <span className="block text-[11px] text-navy-500">
                          {testimonial.location}
                        </span>
                      )}
                    </span>
                    {testimonial.rating && (
                      <span className="ml-auto flex gap-0.5 text-gold-500" aria-label={`${testimonial.rating} out of 5`}>
                        {Array.from({ length: testimonial.rating }).map((_, star) => (
                          <Icon key={star} name="star" size={12} />
                        ))}
                      </span>
                    )}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mx-auto mt-10 max-w-4xl">
            <div className="relative overflow-hidden rounded-2xl border border-navy-100 bg-mist">
              <div className="grid gap-0 md:grid-cols-5">
                <div className="relative overflow-hidden bg-navy-900 p-7 md:col-span-2 sm:p-8">
                  <div className="absolute inset-0 blueprint-grid opacity-70" aria-hidden="true" />
                  <div className="relative">
                    <Icon name="quote" size={34} className="text-gold-400" />
                    <p className="mt-5 font-display text-xl font-semibold leading-snug text-white">
                      Built with you,
                      <br />
                      not just for you.
                    </p>
                    <p className="mt-3 text-[12.5px] leading-relaxed text-white/55">
                      We are opening this space for honest feedback from the clients we work
                      with — no stock reviews, no invented names.
                    </p>
                  </div>
                </div>

                <div className="p-7 md:col-span-3 sm:p-8">
                  <h3 className="font-display text-lg font-semibold text-navy-900">
                    Worked with us? We would love your feedback.
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-navy-500">
                    Share your experience of the design or construction process on WhatsApp.
                    With your permission, we will publish your words here — exactly as you
                    wrote them.
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {[
                      "Feedback published only with written permission",
                      "Names and photos shared only if you agree",
                      "No ratings or reviews are written by us",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[12.5px] text-navy-600">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-100 text-gold-700">
                          <Icon name="check" size={12} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                    <a
                      href={waHref(primaryPhone, feedbackMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold btn-sm"
                    >
                      <Icon name="whatsapp" size={15} />
                      Share Your Feedback
                    </a>
                    <Link href="/contact" className="btn-outline btn-sm">
                      Send a Message
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
