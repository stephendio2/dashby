export const Greeting = () => {
  return <div className="hover:bg-slate-100">Home</div>;
};

export const Quote = () => {
  return <div>Quote</div>;
};

export const Misc = () => {
  return <div>Stuff here</div>;
};

export const Time = () => <div>Time</div>;

interface Props {
  children?: JSX.Element;
}

export const HomeWrapper: React.FC<Props> = ({ children }) => {
  return <div className="h-100 w-100 flex bg-amber-600">{children}</div>;
};

const Home = () => (
  <div className="flex h-screen w-screen bg-amber-600 justify-center">
    <div className="flex flex-col justify-center">
      <Time />
      <Greeting />
      <Quote />
      <Misc />
    </div>
  </div>
);

export default Home;
