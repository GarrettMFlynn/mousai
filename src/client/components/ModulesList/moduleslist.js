import Link from "next/link";
import Date from "../date";
import React from "react";
import {FlexBreak} from '../../containers/layouts/layouts.styled';
import { ModuleSection, List, ListItem, Text, IconHolder, Icon} from './moduleslist.styled';
import {Breadcrumb} from '../Footer/footer.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Moduleslist =  ({allPostsData}) => {
    return(
        <ModuleSection>
            <List>
                {allPostsData.map(({ id, date, title, description, icon}) => (
                    <Link key={"post"+id} href="posts/[id]" as={`/posts/${id}`}>
                        <ListItem>
                            <IconHolder>
                                <Icon>
                                    <FontAwesomeIcon icon={icon}/>
                                </Icon>
                            </IconHolder>
                            <Text>
                                <h2>{title}</h2>
                                <FlexBreak/>
                                <Breadcrumb>{description}</Breadcrumb>
                                <FlexBreak/>
                                <Breadcrumb>
                                    {<Date dateString={date} />}
                                </Breadcrumb>
                            </Text>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </ModuleSection>
    )
}

export default Moduleslist