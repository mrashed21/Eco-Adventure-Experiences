const JoinWithUs = () => {
  return (
    <div id="join-with-us" >
      <div className="py-12 px-6 bg-purple-100">
        <div className="w-8/12 mx-auto ">
          <h2 className="text-4xl mt-10 font-bold mb-4 text-center">Join With Us</h2>
          <p className="text-lg mb-8 text-center">
            Ready to embark on exciting adventures? Join us now and be a part of
            unforgettable experiences. Fill out the form below to get started!
          </p>

          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className=" text-lg font-medium">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input mt-3 input-bordered w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className=" text-lg font-medium">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input mt-3 input-bordered w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className=" text-lg font-medium mb-3">Message</label>
              <textarea
                placeholder="Share your thoughts or questions"
                className="textarea mt-3 textarea-bordered w-full"
                rows="4"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full rounded-full">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinWithUs;
