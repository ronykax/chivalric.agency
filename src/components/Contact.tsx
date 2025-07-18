"use client";

import Button from "./Button";
import ArrowRight from "./icons/arrow-right";

export default function Contact() {
    return (
        <section id="contact" className="bg-brand flex flex-col">
            <div className="flex flex-col gap-6 p-12 t:px-48">
                <div className="uppercase font-league text-2xl text-black leading-2xl">
                    Let's get in
                    <br />
                    <span className="font-garamond lowercase italic">
                        touch.
                    </span>
                </div>

                <div className="font-garamond text-lg leading-lg">
                    Our team will love to help build your kingdom, lets get in
                    touch.
                </div>
            </div>

            <div className="flex px-12 pb-12 t:px-48">
                <form
                    className="flex flex-col gap-4 w-full"
                    // onSubmit={handleSubmit}
                    action="/api/submit"
                    method="POST"
                >
                    <div className="flex gap-3 w-full">
                        <label className="font-league text-lg uppercase w-full">
                            First Name
                            <input
                                type="text"
                                id="first-name"
                                name="first-name"
                                placeholder="John"
                                className="w-full mt-0.5 border-2 border-black border-opacity-25 px-4 py-3 font-garamond"
                                required
                            />
                        </label>
                        <label className="font-league text-lg uppercase w-full">
                            Last Name
                            <input
                                type="text"
                                id="last-name"
                                name="last-name"
                                placeholder="Chivalric"
                                className="w-full mt-0.5 border-2 border-black border-opacity-25 px-4 py-3 font-garamond"
                                required
                            />
                        </label>
                    </div>
                    <label className="font-league text-lg uppercase">
                        Company
                        <input
                            type="text"
                            id="company"
                            name="company"
                            placeholder="Acme Inc."
                            className="w-full mt-0.5 border-2 border-black border-opacity-25 px-4 py-3 font-garamond"
                            required
                        />
                    </label>
                    <label className="font-league text-lg uppercase">
                        Email
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="john@chivalric.agency"
                            className="w-full mt-0.5 border-2 border-black border-opacity-25 px-4 py-3 font-garamond"
                            required
                        />
                    </label>
                    <label className="font-league text-lg uppercase">
                        Budget
                        <input
                            type="text"
                            id="budget"
                            name="budget"
                            placeholder="$1,000"
                            className="w-full mt-0.5 border-2 border-black border-opacity-25 px-4 py-3 font-garamond"
                            required
                        />
                    </label>
                    <label className="font-league text-lg uppercase">
                        Details
                        <textarea
                            id="details"
                            name="details"
                            placeholder="Let us know what you need for your community"
                            className="w-full mt-0.5 border-2 border-black border-opacity-25 px-4 py-3 font-garamond"
                            rows={3}
                            required
                        ></textarea>
                    </label>
                    <Button
                        label="Get in touch"
                        style="primary"
                        color="black"
                        size="lg"
                        icon={<ArrowRight />}
                        width="full"
                        type="submit"
                    />
                </form>
            </div>
        </section>
    );
}
