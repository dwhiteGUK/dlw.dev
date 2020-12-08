import { FC } from 'react';
import Image from 'next/image';

import { Ahref, AppShell, Container, Heading1, Heading3, Paragraph } from '~/components';

const Work: FC = () => (
  <AppShell>
    <Container>
      <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <div className="space-y-5 sm:space-y-4">
          <Heading1>Work</Heading1>
          <p className="text-xl text-gray-500">From static websites to spas .....</p>
        </div>
        <div className="lg:col-span-2">
          <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
            <li className="sm:py-8">
              <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                <div>
                  <Image
                    src="/images/casino-pre-registration.png"
                    alt="Screenshot of Casino Pre-registration homepage"
                    layout="responsive"
                    width={300}
                    height={200}
                    quality={90}
                    loading="eager"
                  />
                </div>
                <div className="sm:col-span-2">
                  <div className="space-y-4">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <Heading3>Genting Casinos Pre-register</Heading3>
                      <p>
                        <Ahref to="https://register.gentingcasinos.co.uk/">
                          <span className="inline-flex items-center justify-center border-transparent text-base leading-6 font-medium transition duration-150 ease-in-out text-orange-500 hover:text-gray-900 dark:hover:text-white hover:cursor-pointer">
                            https://register.gentingcasinos.co.uk
                          </span>
                        </Ahref>
                      </p>
                    </div>
                    <div className="text-lg space-y-5">
                      <Paragraph>
                        Single page application/website to allow customers to pre-register before entering a
                        club/casino. Built with react and talwindcss. Front end validation provided by formik with yup.
                      </Paragraph>
                      <Paragraph>
                        Backend built using the serverless framework and AWS consisting of:
                        <ul className="list-disc list-inside mr-10 text-base mt-1">
                          <li>API Gateway</li>
                          <li>Lambda</li>
                          <li>S3</li>
                          <li>AWS Amplify</li>
                          <li>Amazon Textract</li>
                        </ul>
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="sm:py-8">
              <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                <div>
                  <Image
                    src="/images/the-colony-club.jpg"
                    alt="Screenshot of The Colony Club homepage"
                    layout="responsive"
                    width={300}
                    height={200}
                    quality={90}
                    loading="eager"
                  />
                </div>
                <div className="sm:col-span-2">
                  <div className="space-y-4">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <Heading3>The Colony Club</Heading3>
                      <p>
                        <Ahref to="https://register.gentingcasinos.co.uk/">
                          <span className="inline-flex items-center justify-center border-transparent text-base leading-6 font-medium transition duration-150 ease-in-out text-orange-500 hover:text-gray-900 dark:hover:text-white hover:cursor-pointer">
                            https://www.thecolonyclub.co.uk/
                          </span>
                        </Ahref>
                      </p>
                    </div>
                    <div className="text-lg  space-y-5">
                      <Paragraph>Static html website</Paragraph>
                      <Paragraph>Shared Lambda endpoint for contact forms</Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="sm:py-8">
              <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                <div>
                  <Image
                    src="/images/genting-careers.jpg"
                    alt="Screenshot of Genting Careers"
                    layout="responsive"
                    width={300}
                    height={200}
                    quality={90}
                    loading="eager"
                  />
                </div>
                <div className="sm:col-span-2">
                  <div className="space-y-4">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <Heading3>Genting Careers</Heading3>
                      <p>
                        <Ahref to="https://staging.gentingcareers.co.uk/">
                          <span className="inline-flex items-center justify-center border-transparent text-base leading-6 font-medium transition duration-150 ease-in-out text-orange-500 hover:text-gray-900 dark:hover:text-white hover:cursor-pointer">
                            https://staging.gentingcareers.co.uk
                          </span>
                        </Ahref>
                      </p>
                    </div>
                    <div className="text-lg  space-y-5">
                      <Paragraph>
                        3rd party design, static html website built with tailwindcss and compontized
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  </AppShell>
);

export default Work;
