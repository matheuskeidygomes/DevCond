import { Wall } from '../models/Wall.js';
import { WallLike } from '../models/WallLike.js';
import { User } from '../models/User.js';

export const getAll = async (user) => {

    let list = await Wall.findAll();
    let hasUser = await User.findOne({ where: { id: user } })

    if (hasUser) {

        if (list.length > 0) {

            return await Promise.all(list.map(async (item) => {
    
                let likes = await WallLike.findAll({ where: {
                    id_wall: item.id
                }});
                
                let meLike = await WallLike.findOne({ where: {
                    id_wall: item.id,
                    id_user: user
                }})
        
                item.dataValues['likes'] = likes.length;
                item.dataValues['liked'] = meLike ? true : false;
        
                return item;
    
            }));
    
        } else {
    
            return ({ error: "Don't have any warning!"})
            
        }

    } else {

        return ({ error: "User id not found!"});
    }

} 

export const Like = async (id, user) => {

    let hasWarning = await Wall.findByPk(id);

    if (hasWarning) {

        let hasUser = await User.findOne({ where: { id: user } });

        if (hasUser) {

            let hasLiked = await WallLike.findOne({ where: { id_user: user, id_wall: id } });
    
            if(!hasLiked) {
    
                await WallLike.create({ id_wall: id, id_user: user });
    
                let likes = await WallLike.findAll({ where: { id_wall: id} });
    
                return ({ liked: true, likes: likes.length });
                
            } else {
    
                await WallLike.destroy({ where: { id_wall: id, id_user: user } });
    
                let likes = await WallLike.findAll({ where: { id_wall: id} });
    
                return ({ liked: false, likes: likes.length });
            }
    
        } else {
    
            return ({ error: "User e-mail not found!"});
        }

    } else {

        return ({ error: "The Warning ID is incorrect, or doesn't exist!"});
    }

}