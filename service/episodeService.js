const Episode = require("../database/episodeModel");
const { formatMongoData } = require("../helper/dbHelper");

module.exports.createEpisode = async (serviceData, location) => {
  try {
    console.log(location);
    serviceData.url = location;
    console.log(serviceData);
    // upload(request, response, function(error) {
    //   if (error) {
    //     console.log(error);
    //     //return response.redirect("/error");
    //   }
    //   console.log(url);
    //   serviceData.url = url;
    //   console.log("File uploaded successfully ");
    //   //response.redirect("/success");
    // });

    let episode = new Episode({ ...serviceData });

    let result = await episode.save();
    return formatMongoData(result);
  } catch (error) {
    throw new Error(error);
    console.log("something went wrong : service : createEpisode", error);
  }
};

module.exports.getAllEpisodes = async ({
  query = "",
  skip = 0,
  limit = 10
}) => {
  try {
    if (query.length == 0) {
      let episodes = await Episode.find()
        .skip(parseInt(skip))
        .limit(parseInt(limit));
      return formatMongoData(episodes);
    }

    let episodes = await Episode.find({ tags: { $elemMatch: { $eq: query } } })
      .skip(parseInt(skip))
      .limit(parseInt(limit));
    return formatMongoData(episodes);
  } catch (error) {
    throw new Error(error);
    console.log("something went wrong : service : getAllEpisodes", error);
  }
};
