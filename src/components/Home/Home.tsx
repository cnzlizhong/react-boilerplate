import logo from '../../assets/images/react-logo.png';

const Home = ({ title }: { title: string }) => {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <div className="overflow-hidden w-96 h-96">
                <img src={logo} alt="logo" className="w-full h-full" />
            </div>
            <div className="text-white text-5xl">{title}</div>
        </div>
    );
};

export default Home;
