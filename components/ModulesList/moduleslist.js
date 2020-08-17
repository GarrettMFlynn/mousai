import Link from "next/link";
import Date from "../../components/date";
import React from "react";
import {FlexBreak} from '../../containers/layouts/layouts.styled';
import { ModuleSection, List, ListItem, Text, IconHolder, Icon} from './moduleslist.styled';
import {Breadcrumb} from '../Footer/footer.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Moduleslist =  ({allPostsData}) => {
    return(
        <ModuleSection>
            <h1>Available Modules</h1>
            <FlexBreak/>
            <List>
                {allPostsData.map(({ id, date, title, role, icon}) => (
                    <Link key={"project"+id} href="/posts/[id]" as={`/posts/${id}`}>
                        <ListItem>
                            <IconHolder>
                                <Icon>
                                    <FontAwesomeIcon icon={icon} fa-10x/>
                                </Icon>
                            </IconHolder>
                            <Text>
                                <a><h1>{title}</h1></a>
                                <FlexBreak/>
                                <Breadcrumb> {'Published '}
                                    {<Date dateString={date} />}
                                </Breadcrumb>
                                <FlexBreak/>
                                <Breadcrumb>{role}</Breadcrumb>
                            </Text>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </ModuleSection>
    )
}

export default Moduleslist