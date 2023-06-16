import LikeService from '../services/like-service.js';

const likeService = new LikeService();

export const toggleLike = async (req, res) => {
    try {
        const response = await likeService.toggleLike(req.query.modelId, req.query.modelType, req.body.userId);
        return res.status(201).json({
            success: true,
            message: 'Sucessfully toggled like',
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            err: error
        });
    }
}