import { Button } from 'antd';

const Home = () => {
  return (
    <div>
      <h1 className={'text-2xl text-red-700'}>The Random Bunny Distributor</h1>
      <p>
        Welcome to the Random Bunny distributor. This site is for people who
        have too many bunnies or are eager to receive a bunny. Why are you here?
        Choose - but choose wiesly. There is no turning back (except via the
        back button I guess). Hush now or no bunny for you.
      </p>
      <Button href={'/donate-bunny'} type="default">
        Donate a bunny
      </Button>
      <Button href={'/receive-bunny'} type="default">
        Receive a bunny
      </Button>
    </div>
  );
};

export default Home;
