import Slider from "../Components/home/LiveIt";
import HomeDestinations from "../Components/home/Destinations";
import WhatsNew from "../Components/home/WhatsNew";
import Awards from "../Components/home/Awards";
import PlayList from "../Components/home/Playlist";
function HomePage(){
    return (
        <div>
            <Slider />
            <HomeDestinations />
            <WhatsNew />
            <Awards />

            <PlayList start={25} name1="New" name2="Year" clr="#e8f0f2" />
            <PlayList start={35} name1="Northern" name2="Playlist" clr="white" />
            <PlayList start={0} name1="Southern" name2="Playlist" clr="#e8f0f2" />
            <PlayList start={25} name1="Weekend" name2="Singles" clr="white" />
            <PlayList start={45} name1="Food" name2="Mixtape" clr="#e8f0f2" />
            <PlayList start={20} name1="Nature" name2="Melodies" clr="white" />
            <PlayList start={8} name1="Off" name2="Beat" clr="#e8f0f2" />
        </div>
    )
}
export default HomePage