import "./Home.css";
import blogs from "../../data";
import BlogCard from "./../../components/BlogCard/BlogCard";

function Home() {
    return (
        <div className="container">
            {blogs.map((blogobj, i) => {
                const {
                    id,
                    title,
                    content,
                    founder,
                    date,
                    Technology
                } = blogobj;
                return (
                    <BlogCard
                        key={i}
                        id={id}
                        title={title}
                        content={content}
                        founder={founder}
                        date={date}
                        Technology={Technology}
                    />
                );
            })}
        </div>
    );
}

export default Home;
