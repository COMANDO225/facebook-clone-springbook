import CreatePost from "./CreatePost";
import Post from "./Post";
import Posts from "./Posts";

const MainContent = () => {
    return (
        <div className="flex-grow h-screen pt-6 mr-6 overflow-y-auto">
            <div className="mx-auto max-w-md md:max-w-xl lg:max-w-2xl">
                {/* create pos container */}
                <CreatePost/>
                <Posts/>
            </div>
        </div>
    );
}

export default MainContent;