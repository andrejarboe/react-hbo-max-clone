import AuthCheck from "../components/AuthCheck";
import MainLayout from "../components/Layouts/MainLayout";
import CastInfo from "../components/UI/CastInfo/CastInfo";
import FeaturedMedia from "../components/UI/Featuredmedia/FeaturedMedia";
import MediaRow from "../components/UI/MediaRow/MediaRow"


export default function SingleMediaPage() {
    return AuthCheck(
        <MainLayout>
            <FeaturedMedia />
            <MediaRow
                title="More Like This"
                type="small-v"
            />
            <CastInfo />
        </MainLayout>
    )
}


