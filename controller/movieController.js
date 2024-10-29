import Movie from '../model/movie.js'

export const getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id).populate('producers').populate('actors');
        if (!movie) return res.status(404).json({ message: "Movie not found" });
        res.json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getAllMovies = async(req,res)=>{
    try {
        const movies = await Movie.find().populate('producers').populate('actors');
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const addMovie = async(req,res)=>{
    const { name, yearOfRelease, plot, poster, producers, actors } = req.body;
    const movie = new Movie({ name, yearOfRelease, plot, poster, producers, actors });

    try {
        const savedMovie = await movie.save();
        res.status(201).json(savedMovie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
export const updateMovie = async(req,res)=>{
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedMovie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteMovie = async(req,res)=>{
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.status(204).json({success:true}); 
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}