import Photo from "@/components/photo";
import Social from "@/components/social";
import Stats from "@/components/stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { getDictionarie } from "@/dictionaries";

const Home = async ({ params: { locale } }: { params: { locale: string } }) => {
  const dictionary = await getDictionarie(locale);
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          <div className="order-2 text-center xl:order-none xl:text-left">
            <span className="text-xl">{dictionary.home.role}</span>
            <h1 className="h1 mb-6">
              {dictionary.home.title} <br />{" "}
              <span className="text-purple-600">Grégory Alvim</span>
            </h1>
            <p className="mb-9 max-w-[500px]">{dictionary.home.description}
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>

            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Button
                size="lg"
                variant="outline"
                className="flex items-center gap-2 uppercase"
              >
                <span>{dictionary.home.button}</span> <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-purple-600 rounded-full flex justify-center items-center text-purple-600 text-base hover:bg-purple-600 hover:text-background hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
