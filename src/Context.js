import React, { Component } from 'react';
import items from './data/allProjects';


const ProjectContext = React.createContext();

class ProjectProvider extends Component {
    state = {
        projects: [],
        featuredProjects: [],
        loading: true
    };

    componentDidMount() {
        let projects = this.formatData(items);
        let featuredProjects = projects.filter(item => item.featured);

        this.setState({
            projects,
            featuredProjects,
            loading: false
        })
    }

    getProject = (slug) => {
        let tempProject = [...this.state.projects];
        const project = tempProject.find(project => project.slug === slug);
        return project;
    }

    formatData(items) {
        let tempItem = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);

            let projects = {...item.fields, images, id};

            return projects;
        });
        return tempItem;
    }

    render() {
        return (
            <ProjectContext.Provider value={{
                getProject: this.getProject,
                ...this.state,
            }}>
                {this.props.children}
            </ProjectContext.Provider>
        );
    }
}

const ProjectConsumer = ProjectContext.Consumer;

export function withProjectConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <ProjectConsumer>
            {value => <Component {...props} context={value}/>}
        </ProjectConsumer>
    }
}

export {ProjectProvider, ProjectConsumer, ProjectContext};