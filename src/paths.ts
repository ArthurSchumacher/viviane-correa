const paths = {
    home() {
        return '/';
    },
    projects() {
        return '/projetos';
    },
    projectsById(id: string) {
        return `/projetos/${id}`;
    },
    about() {
        return '/sobre';
    },
    office() {
        return '/escritorio';
    },
    contact() {
        return '/contato';
    },
    instagram() {
        return 'https://www.instagram.com/vivianecorrea.arquitetura/';
    },
    whatsApp() {
        return 'https://api.whatsapp.com/send/?phone=5511975768991&text&type=phone_number&app_absent=0';
    },
    facebook() {
        return 'https://www.facebook.com/viviane.correa.3304';
    },
    youtube() {
        return 'https://www.youtube.com';
    },
};

export default paths;