# CareYayaEntertain
An app used to help caretakers connect and bond more with the seniors they care for.

### Organization
Folders were used to organize different parts of the code:
- Components -> Contains components created for reusability purposes
    - circleButton: Circlular button
    - questionCard: Card with question to be asked
    - recordButton: Button that can record audio


- Images -> Contains images used within app
    - logo.png (used for header of Home Screen)


- Screens -> Contains the different screens shown in app
    - Laugh -> Contains screens shown for actions listed on Laugh Screen
        - 'dance.js': Instructs user to put on a song and dance with senior
        - 'feelGoodMovies.js': Shows a list of feel-good movies to watch together
        - 'jokes.js': Shows a list of jokes to laugh at together
        - 'karaoke.js': Instructs user to put on a song and sing together
        - 'twisters.js': Shows a list of tongue-twisters to try together

    - Play -> Contains screens shown for actions listed on Play Screen
        - 'cardMatch.js': Shows card-matching game that can be played
        - 'crossword.js': Shows crossword that can be completed
        - 'memoryGames.js': Shows memory game that can be played
        - 'solitaire.js': Shows solitaire game that can be played
        - 'sudoku.js': Shows sudoku game that can be completed

    - Reminisce -> Contains screens shown for actions listed on Reminisce Screen
        - 'music.js': Shows different eras that can be clicked for specific era's music playlist
        - 'photos.js': Instructs user to ask senior to go through a photo album
        - 'playlists.js': Lists the playlists that are loaded dependent on button pressed in 'music.js' screen
        - 'youtube.js': Shows video of the music playlist being played

    - 'connect.js' -> Things to do to connect with senior
    - 'home.js' -> 4 overall actions for caretaker and senior to do together
    - 'laugh.js' -> Things to do to experience positive emotions
    - 'play.js' -> Things to do to entertain/play
    - 'reminisce.js' -> Things to do to reminisce on past




### Styling
- Used kitten-ui for themed colors (colors established in 'custom-theme.json')
- Created '/Utils/styling.js' for additional styling