import Zajęcia from "./NewsImages/Zajęcia.png";
import Ramówka from "./NewsImages/Ramówka.png";
import Halloween from "./NewsImages/Halloween.png";
import Integracja from "./NewsImages/Integracja.png";
import Wigilia from "./NewsImages/Wigilia.png";
import Remont from "./NewsImages/Remont.png";

const allNewsListData = [
    {
        title: "Obiad Wigilijny",
        image: <img src={Wigilia.png} alt="Obiad Wigilijny" />,
        publishedDate: "19.12.2024",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus nibh enim, ut rhoncus mauris imperdiet non. Mauris nec nisi quis ex suscipit consectetur. Nulla in sem id leo malesuada sollicitudin in sit amet sapien. Cras ornare nulla enim, et viverra magna dictum vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc interdum a.",
        flag: true,
    },
    {
        title: "Planowany remont łazienki na parterze",
        image: <img src={Remont.png} alt="Planowany remont łazienki na parterze" />,
        publishedDate: "10.12.2024",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in tristique nulla. Morbi neque est, luctus at nisl a, malesuada dapibus dolor. In rhoncus justo vitae odio aliquet, et interdum elit suscipit. Aliquam porta quam et mauris mattis, non imperdiet.",
        flag: true,
    },
    {
        title: "Wyjazd integracyjny",
        image: <img src={Integracja.png} alt="Wyjazd integracyjny" />,
        publishedDate: "20.11.2024",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis ac sapien in pretium. Proin eget ex sit amet ante iaculis venenatis. Donec id elit non justo feugiat tempor vel non ante. Donec in ultrices justo. Curabitur congue lacus quis.",
        flag: true,
    },
    {
        title: "Impreza Halloween",
        image: <img src={Halloween.png} alt="Impreza Halloween" />,
        publishedDate: "20.10.2024",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse leo erat, tristique ut sapien et, finibus consectetur sapien. Donec commodo.",
        flag: false,
    },
    {
        title: "Impreza Ramówkowa",
        image: <img src={Ramówka.png} alt="Impreza Ramówkowa" />,
        publishedDate: "24.08.2024",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula tortor a sollicitudin ullamcorper. In ac odio ipsum. Cras accumsan lacus sit amet orci faucibus sollicitudin. Mauris egestas mattis neque vel pretium. Curabitur pretium mauris auctor auctor.",
        flag: false,
    },
    {
        title: "Dzisiejsze zajęcia zdrowy kręgosłup odwołane",
        image: <img src={Zajęcia.png} alt="Dzisiejsze zajęcia zdrowy kręgosłup odwołane" />,
        publishedDate: "06.08.2024",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus, enim vitae pellentesque mollis, nisi purus faucibus nunc, id.",
        flag: false,
    },
];

export const allNewsList = allNewsListData.map((item, index) => ({
    id: index + 1,
    ...item,
}));
