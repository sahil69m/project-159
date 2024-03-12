createPoster: function (item) {
    const entityE1 = document.createElement("a-entity");
    entityEl.setAttribute("visible",true);
    entityE1.setAttribute("geometry",{
        primitive: "plane",
        width:20,
        height:28
    }),
    entityE1.setAttribute("position",{x: 0, y: 5,Z:0.1}),
    entityE1.setAttribute("material",{src: item.url})
} 

handleMouseEvents: function () {
    //Mouse Enter Events
    this.el.addEventListener("mouseenter", () => {
        const id = this.el.getAttribute("id");
        const posterId = [
            "superman",
            "spiderman",
            "caption-aero",
            "outer-space",
        ];

        if (posterId.includes(id)) {
            const postersContainer = document.querySelector("#poster-container");
            postersContainer.setAttribute("cursor-listener", {
                selectedId: id,
            });
            this.el.setAttribute("material",{ color: "#1565c0"});
        }
    });
}
init: function () {
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
}
//check the selected item to set the "info-banner" components on the plane 
if (selectedItemId) {
    fadeBackgroundEl.setAttribute("visual", true);
    fadeBackgroundEl.setAttribute("info-banner", {
        itemId: selectedItemId,
    });
    titleEl.setAttribute("visual", false);
    cursorEl.setAttribute("position", { x: 0, y: 0, z:-1});
    cursorEl.setAttribute("geometry", {
        radiusInner: 0.03,
        radiusOuter: 0.04,
    });   
} else {
    //else make the plane invisible
    fadeBackgroundEl.setAttribute("visible", false);
    titleEl.setAttribute("visible", true);
    cursorEl.setAttribute("position", { x: 0, y: 0, z: -3});
    cursorEl.setAttribute("geometry", {
        radiusInner: 0.08,
        radiusOuter: 0.12,
    });
}
update: function(){
    const fadeBackgroundEl = document.querySelector("#fadeBackground");


    c = fadeBackgroundEl.children;
    if (c.length . 0) {
        var i;
        for (i = 0; i <= c.length; i++) {
            fadeBackgroundEl.removeChild(c[i]);
        }
    }, else {
        this.handleMouseClickEvents();
    },
}