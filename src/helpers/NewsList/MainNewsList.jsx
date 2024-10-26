import Integracja from "./NewsImages/Integracja.png";
import Wigilia from "./NewsImages/Wigilia.png";
import Remont from "./NewsImages/Remont.png";

export const mainNewsList = [
    {
        title: "Obiad Wigilijny",
        image: <img src={Wigilia.png} alt="Obiad Wigilijny" />,
        publishedDate: "19.12.2024",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus nibh enim, ut rhoncus mauris imperdiet non. Mauris nec nisi quis ex suscipit consectetur. Nulla in sem id leo malesuada sollicitudin in sit amet sapien. Cras ornare nulla enim, et viverra magna dictum vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc interdum a.",
    },
    {
        title: "Planowany remont łazienki na parterze",
        image: <img src={Remont.png} alt="Planowany remont łazienki na parterze" />,
        publishedDate: "10.12.2024",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in tristique nulla. Morbi neque est, luctus at nisl a, malesuada dapibus dolor. In rhoncus justo vitae odio aliquet, et interdum elit suscipit. Aliquam porta quam et mauris mattis, non imperdiet.",
    },
    {
        title: "Wyjazd integracyjny",
        image: <img src={Integracja.png} alt="Wyjazd integracyjny" />,
        publishedDate: "20.11.2024",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis ac sapien in pretium. Proin eget ex sit amet ante iaculis venenatis. Donec id elit non justo feugiat tempor vel non ante. Donec in ultrices justo. Curabitur congue lacus quis.",
    },
];
