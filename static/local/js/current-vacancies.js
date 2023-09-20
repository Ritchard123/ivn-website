
    // Function to toggle content visibility
    function toggleContent(contentId) {
        const content = document.querySelector(`#${contentId} .down_div_bar`);
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    }

    // Close all content except for the one specified
    function closeOtherContent(excludedContentId) {
        document.querySelectorAll('.down_div_bar').forEach(function(content) {
            if (content.parentElement.id !== excludedContentId) {
                content.style.display = 'none';
            }
        });
    }

    // Event listeners for "Read More" buttons
    document.getElementById('down_info_msg_aus').addEventListener('click', function() {
        closeOtherContent('down_info_msg_aus');
        toggleContent('down_info_msg_aus');
    });

    document.getElementById('down_info_msg_can').addEventListener('click', function() {
        closeOtherContent('down_info_msg_can');
        toggleContent('down_info_msg_can');
    });
    document.getElementById('down_info_msg_china').addEventListener('click', function() {
        closeOtherContent('down_info_msg_china');
        toggleContent('down_info_msg_china');
    });
    document.getElementById('down_info_msg_dubai').addEventListener('click', function() {
        closeOtherContent('down_info_msg_dubai');
        toggleContent('down_info_msg_dubai');
    });
    document.getElementById('down_info_msg_ethiopia').addEventListener('click', function() {
        closeOtherContent('down_info_msg_ethiopia');
        toggleContent('down_info_msg_ethiopia');
    });
    document.getElementById('down_info_msg_india').addEventListener('click', function() {
        closeOtherContent('down_info_msg_india');
        toggleContent('down_info_msg_india');
    });
    document.getElementById('down_info_msg_japan').addEventListener('click', function() {
        closeOtherContent('down_info_msg_japan');
        toggleContent('down_info_msg_japan');
    });
    document.getElementById('down_info_msg_kuwait').addEventListener('click', function() {
        closeOtherContent('down_info_msg_kuwait');
        toggleContent('down_info_msg_kuwait');
    });
    document.getElementById('down_info_msg_lativa').addEventListener('click', function() {
        closeOtherContent('down_info_msg_lativa');
        toggleContent('down_info_msg_lativa');
    });
    document.getElementById('down_info_msg_lithuania').addEventListener('click', function() {
        closeOtherContent('down_info_msg_lithuania');
        toggleContent('down_info_msg_lithuania');
    });
    document.getElementById('down_info_msg_saudi').addEventListener('click', function() {
        closeOtherContent('down_info_msg_saudi');
        toggleContent('down_info_msg_saudi');
    });
    document.getElementById('down_info_msg_singa').addEventListener('click', function() {
        closeOtherContent('down_info_msg_singa');
        toggleContent('down_info_msg_singa');
    });

    // Add similar event listeners for other countries

    // Event listeners for "close-btn" buttons
    document.querySelectorAll('.close-btn').forEach(function(closeButton) {
        closeButton.addEventListener('click', function(event) {
            event.stopPropagation();
            const contentId = closeButton.closest('.down_div_bar').parentElement.id;
            toggleContent(contentId);
        });
    });

