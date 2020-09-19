import Link from "next/link";
import Date from "../date";
import React from "react";
import {FlexBreak} from '../../containers/layouts/layouts.styled';
import { ModuleSection, List, ListItem, Text, IconHolder, Icon} from './imagegallery.styled';
import {Breadcrumb} from "../Footer/footer.styled";

const ImageGallery =  ({allPostsData}) => {
    return(
        <>
            <List>
                {allPostsData.map(({ id, date, title, description, imageSrc, icon}) => (
                    <Link key={"post"+id} href="posts/[id]" as={`/posts/${id}`}>
                        <ListItem img={imageSrc}>
                            <Text>
                                <h2>{title}</h2>
                                <Breadcrumb>{description}</Breadcrumb>
                                <FlexBreak/>
                                <Breadcrumb>{<Date dateString={date} />}</Breadcrumb>
                            </Text>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </>
    )
}

export default ImageGallery