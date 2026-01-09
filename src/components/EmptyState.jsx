import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';

function EmptyState() {
    return (
        <div className="emptyNotes">
            <FolderCopyOutlinedIcon fontSize="large" />
            <p>No notes yet. Add your first note.</p>
        </div>
    );
}

export default EmptyState;
