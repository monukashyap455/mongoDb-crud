const user = require("../model/user");


exports.userCreate = async (req, res) => {
    try {

        const { name, email, username, age, gender, mobile } = req.body
        const userData = new user({
            name: name,
            email: email,
            username: username,
            age: age,
            gender: gender,
            mobile: mobile
        })
        const saveData = await userData.save();
        res.status(200).json(saveData);
    } catch (error) {
        console.log(error)
    }
}

exports.userRead = async (req, res) => {
    try {
        const data = await user.find();
        res.json(data)
    } catch (error) {
        console.log(error);

    }
}

exports.userUpdate = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, email, username, age, gender, mobile } = req.body
        const data = await user.findByIdAndUpdate(id, {
            name: name,
            email: email,
            username: username,
            age: age,
            gender: gender,
            mobile: mobile
        })
        res.status(200).json(data)
    } catch (error) {
        console.log(error.massage);

    }
}

exports.userDelete = async (req, res) => {
    try {
        const _id = req.params.id;
        const removeid = await user.findByIdAndDelete(_id);
        res.json(removeid)

    } catch (error) {
        console.log(error);

    }
}
