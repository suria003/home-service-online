// import Nav from "./Nav/Nav";
import NavButton from "./Nav/NavButton";
import ProfileNav from "./Nav/ProfileNav";
export default function Template() {
    return(
        <main className="overflow-hidden h-screen w-fullk bg-[#fff]">
            <NavButton />
            <ProfileNav />
            {/* <Nav /> */}
        </main>
    );
}