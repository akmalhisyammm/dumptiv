const DetailPage = () => {
  return (
    <>
      <section className="max-w-screen-xl px-4 mx-auto">
        <a href="index.html" className="rounded-full btn">
          Back to Home
        </a>
      </section>
      <section className="flex flex-col max-w-screen-xl gap-2 p-4 mx-auto">
        <h1 className="text-3xl font-semibold">iPhone 15 Pro</h1>
        <div className="flex gap-4">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt=""
            className="w-full"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iure. Dolorum in iure
            reiciendis. Dicta, perferendis exercitationem quibusdam quia sint accusantium unde vel
            magni nihil corporis eveniet placeat in repudiandae.
          </p>
        </div>
      </section>
    </>
  );
};

export default DetailPage;
