
const styles = {
  container:
    "w-[300px] h-[380px] md:h-[345px] bg-white shadow-lg pt-12 relative flex items-center flex-col gap-y-2 border-t-4 border-indigo-500/100 rounded p-4",
  name: "text-center text-lg font-medium",
  position: "text-center text-base font-normal",
  description: "text-left text-gray-500 text-sm leading-6",
};

const Testimonial = ({
  name,
  profileImg,
  position,
  companyLogo,
  description,
}) => {
  return (
    <div className="mt-24">
      <div className={styles.container}>
        <div className="text-center mb-4 absolute -top-8 right-1/2 transform translate-x-1/2">
            <img
              alt="profil"
              src={profileImg}
              className="mx-auto object-cover h-16 w-16 rounded-full shadow-[0_5px_5px_rgba(0,0,0,0.4)]"
              loading="lazy"
            />
        </div>
        <div>
          <span className={styles.name}>{name}</span>
        </div>

        <div>
          <span className={styles.position}>{position}</span>
        </div>
        <div>
          <img
            loading="lazy"
            width="90px"
            height="30px"
            src={companyLogo}
            alt="Google Logo"
          />
        </div>
        <div className="pt-2 overflow-scroll">
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
