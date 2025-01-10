import React, { ReactElement } from "react";

interface ListProps<T, P> {
    tasks: T[];
    children: ReactElement<P>;
}

const List = <T, P>({ tasks, children }: ListProps<T, P>): ReactElement => {
    if (tasks.length > 0)
        return (
            <ul>{tasks.map((task, index) => React.cloneElement(children, { task, key: index, ...children.props }))}</ul>
        );
    else return <p className="w-full text-center text-sm">No Tasks Found!</p>;
};

export default List;
