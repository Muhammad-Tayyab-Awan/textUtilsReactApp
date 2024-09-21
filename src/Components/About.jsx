const About = (props) => {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>
      <div
        className={`min-h-[calc(100vh-2.5rem-4rem)] w-full text-${props.textColor}`}
      >
        <div className="mx-auto py-4 w-[90vw] md:w-[75vw] flex flex-col justify-center items-center gap-4 text-lg sm:text-xl">
          <h1 className="font-bold text-xl sm:!text-2xl">About Us</h1>
          <p>
            Welcome to TextUtils! Our web app is designed to simplify how you
            interact with text, offering a variety of tools to help you edit,
            format, and analyze text efficiently.
          </p>
          <p>
            At TextUtils, we understand that dealing with text can be
            time-consuming and sometimes challenging, whether you&apos;re
            preparing a document, editing content, or simply trying to make text
            more readable. That&apos;s why we&apos;ve built a suite of
            easy-to-use text manipulation tools that allow you to quickly
            perform actions like:
          </p>
          <ul className="font-bold self-start">
            <li>Convert Text to Uppercase or Lowercase</li>
            <li>Remove Extra Spaces</li>
            <li>Count Words, Characters, and Vowels</li>
            <li>Summarize and Analyze Text</li>
            <li>Copy and Auto-Correct Text</li>
            <li>Capitalize Words with a Click</li>
          </ul>
          <p>
            Our goal is to provide a fast, reliable, and user-friendly text
            utility app that caters to your needs, whether you&apos;re a
            student, content creator, or professional writer. We are
            continuously working to enhance the app with new features and
            improvements.
          </p>
          <p className="font-semibold italic">
            Thank you for choosing TextUtils as your go-to tool for text
            manipulation!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
