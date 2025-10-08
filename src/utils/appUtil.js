const formatNumber = (num) => {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num;
};
const getInstalledApps = () => {
    const installedApps = localStorage.getItem('installedList');
    if (installedApps) {
        return JSON.parse(installedApps);
    } else {
        return [];
    }
}

const addToStoredDB = (id) => {
    const installedApps = getInstalledApps();
    if (installedApps.includes(id)) {
        alert('Apps already installed');
        return;
    }
    installedApps.push(id);
    console.log(installedApps);
    localStorage.setItem('installedList', JSON.stringify(installedApps));
}
export { addToStoredDB, formatNumber, getInstalledApps };

