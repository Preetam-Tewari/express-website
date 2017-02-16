var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Usu te epicurei inimicus, vix ad integre deserunt imperdiet. Eu facete civibus luptatum vix. Quo eu debet commune. Ut malis nusquam lucilius mel, error partem apeirian te has. Eos error admodum oportere cu.        Id stet fuisset sed, vel et sumo natum efficiendi. Per audire suavitate ad, eum te quod magna lobortis. Nobis vulputate eu mea, est quem expetenda cu, ludus consul mea cu. Tale unum mazim vel id, quis mundi consequuntur his id. Et tritani legimus nam. Vel aeque instructior ex, ea agam semper dicunt eam."
    },
    {
        name: "Desert Mesa",
        image: "https://farm8.staticflickr.com/7376/9550724261_82a8e1586f.jpg",
        description: "Lorem ipsum dolor sit amet, in quem aliquando qui, has nullam labores insolens ne, ullum oblique persius vim ut. Iusto iriure maluisset cu eum, denique lobortis electram sea cu. Numquam interesset eu qui, te quod nibh neglegentur sea, usu te docendi mentitum. Ex sint laoreet pro, soleat ridens eos ut, et mazim aeterno sed."
    },
    {
        name: "Canyon Floor",
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Nam dicit facilis fastidii et, cibo nullam patrioque mel no. Elit solet deseruisse cu pri, altera inermis mea an. Ne nec posse choro reformidans, his tation probatus voluptatum id, ut vel prompta utroque qualisque. Eirmod vituperata ea vix. Pro ei partem iisque luptatum, sumo suas eripuit mea ei, ea mei natum tation impedit."
    }
]

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // }
        // console.log("removed campgrounds!");
        //add a few campgrounds
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if(err){
        //             console.log(err)
        //         } else {
        //             console.log("added a campground");
        //             //create a comment
        //             Comment.create(
        //                 {
        //                     text: "This place is great, but I wish there was internet",
        //                     author: "Homer"
        //                 }, function(err, comment){
        //                     if(err){
        //                         console.log(err);
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Created new comment");
        //                     }
        //                 });
        //         }
        //     });
        // });
    });
    //add a few comments
}

module.exports = seedDB;
